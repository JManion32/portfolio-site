import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';
import TechStack from "../../components/TechStack";

function SpeedRoulette() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
          <Breadcrumbs />
          <div className="header-row">
            <h1 className="page-header">Speed Roulette</h1>
            <button 
              className="contact-button project-contact-btn"
              onClick={() => window.open('https://speedroulette.io/', '_blank')}
              >
              <img src="../../assets/sr-logo.svg" className="contact-image"/>
            </button>
            <button 
              className="contact-button project-contact-btn"
              onClick={() => window.open('https://github.com/JManion32/speed-roulette', '_blank')}
              >
              <div className="github-image-wrapper">
                  <img src="../../assets/github-mark.png" className="github-image light" />
                  <img src="../../assets/github-mark-white.png" className="github-image dark" />
              </div>
            </button>
          </div>
          <p>
            Inspired by the intensity of speed chess, Speed Roulette puts an interesting twist on the beloved 
            high-stakes casino game. Players start with 20 dollars, 10 possible spins, and just 60 seconds on the 
            clock. When bets are submitted, the winning number is revealed, earnings are paid out, and the clock 
            starts ticking again 2.5 seconds later. Compete for a spot on the daily leaderboard by making quick 
            decisions, taking bold risks, and hitting big payouts.
          </p>
          <TechStack
            heading="Tech Stack"
            sections={[
              {
                title: "Frontend",
                items: [
                  { name: "Vite", className: "vite" },
                  { name: "React", className: "react" },
                  { name: "TypeScript", className: "ts" },
                  { name: "Tailwind CSS", className: "tailwind" }
                ]
              },
              {
                title: "Backend",
                items: [
                  { name: "Go", className: "go" }
                ]
              },
              {
                title: "Database & Caching",
                items: [
                  { name: "PostgreSQL", className: "postgres" },
                  { name: "Redis", className: "redis" }
                ]
              },
              {
                title: "Infrastructure & DevOps",
                items: [
                  { name: "Docker", className: "docker" },
                  { name: "DigitalOcean", className: "digitalocean" },
                  { name: "AWS Route 53", className: "route53" },
                  { name: "Nginx", className: "nginx" },
                  { name: "Certbot", className: "certbot" }
                ]
              },
              {
                title: "Tooling / Dev Dependencies",
                items: [
                  { name: "ESLint", className: "eslint" },
                  { name: "Stylelint", className: "stylelint" },
                  { name: "Prettier", className: "prettier" },
                  { name: "Cypress", className: "cypress" },
                  { name: "GolangCI-Lint", className: "golangci" },
                  { name: "gofmt", className: "gofmt" },
                  { name: "go test", className: "gotest" }
                ]
              }
            ]}
          />
          <h2>Implementation</h2>

          <h2>Technical Challenges</h2>
          1. New Technologies - throwing myself in the deep end
          2. Grid layout
          3. Deployment
          4. Security

          <h2>Reflection</h2>
          Despite this project being created this year, I think this is what truly ignited my true passion
          for programming. Before this I had created projects for assignments and contributed Submitty, but 
          I did it for requirement, rather than the love of the game. From the moment I started this project 
          to the day I deployed it, I was invested, and enjoyed every aspect of the process. I have already 
          applied so much of what I learned in this project to other projects. I am excited to refine it in 
          the future as I continue to learn and grow as a developer.
        </div>
        <footer className="guide-footer">
          <button className="right-guide-button" onClick={() => navigate('/projects/submitty')}>
                Submitty <span className="right-arrow-spacer">{'>>'}</span>
          </button>
        </footer>
      </div>
    </>
  );
}

export default SpeedRoulette;