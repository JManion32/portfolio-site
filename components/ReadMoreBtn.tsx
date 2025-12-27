type Props = {
  readMore: boolean;
  setReadMore: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ReadMoreBtn({ readMore, setReadMore }: Props) {
  return (
    <div className="read-more-btn-container">
      <button className="read-more-btn" onClick={() => setReadMore(!readMore)}>
        {readMore ? "Show Less" : "Read More!"}
      </button>
    </div>
  );
}

