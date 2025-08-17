// components/ResumeInteractive.tsx
import { useEffect, useRef, useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import type { ReactZoomPanPinchRef } from "react-zoom-pan-pinch";

// PDF.js v3 worker (Vite-friendly)
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
(pdfjsLib as any).GlobalWorkerOptions.workerSrc = pdfWorker;

type Props = {
  src?: string;        // public URL to your PDF
  filename?: string;   // download name
  initialRenderScale?: number; // render DPI (1–2 for crispness)
};

export default function ResumeInteractive({
  src = "/files/resume.pdf",
  filename = "justin_manion_resume.pdf",
  initialRenderScale = 1.5,
}: Props) {
  const wrapperRef = useRef<ReactZoomPanPinchRef | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [zoomPct, setZoomPct] = useState(100);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load & render first PDF page to the canvas
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const loadingTask = pdfjsLib.getDocument({ url: src });
        const pdf = await loadingTask.promise;
        if (cancelled) return;

        const page = await pdf.getPage(1);
        if (cancelled) return;

        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const viewport = page.getViewport({ scale: initialRenderScale });

        canvas.width  = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);

        const renderTask = page.render({
        canvasContext: ctx,
        viewport,
        canvas,
        });
        await renderTask.promise;

        if (!cancelled) setLoading(false);
      } catch (e: any) {
        if (!cancelled) {
          setError(e?.message ?? "Failed to load PDF.");
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [src, initialRenderScale]);

  return (
    <div className="resume-stage">
      <TransformWrapper
        ref={wrapperRef}
        initialScale={1}
        minScale={0.4}
        maxScale={4}
        wheel={{ step: 0.12 }}
        doubleClick={{ mode: "zoomIn" }}
        panning={{ velocityDisabled: true }}
        onTransformed={() => {
          const s = wrapperRef.current?.state?.scale;
          if (typeof s === "number") setZoomPct(Math.round(s * 100));
        }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="resume-controls">
              <button onClick={() => zoomOut()}>−</button>
              <span>{zoomPct}%</span>
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => resetTransform()}>Reset</button>
              <a className="download-link" href={src} download={filename}>
                Download
              </a>
            </div>

            <TransformComponent
              wrapperClass="resume-wrapper"
              contentClass="resume-content"
            >
              {error ? (
                <div role="alert">{error}</div>
              ) : (
                <>
                  {loading && <div>Loading resume…</div>}
                  <canvas ref={canvasRef} />
                </>
              )}
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
