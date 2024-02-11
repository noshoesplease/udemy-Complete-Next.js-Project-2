import Image from "next/image";
import { getMarkownPortfolio } from "@/utils";

const MarkdownPortfoliosList = () => {
  const portfolios = getMarkownPortfolio();
  return (
    <>
      <h2 className="content-section-title">Markdown Portfolios</h2>
      <div className="content-list">
        {portfolios &&
          portfolios.map((portfolio,index) => (
            <div className="content-item" key={index}>
              <div className="content-item__image-container">
                <Image
                  src={portfolio.coverImage}
                  alt={portfolio.title}
                  fill={true}
                  sizes="(max-width: 768px)"
                  priority={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="content-item__header">
                <div>{portfolio.title}</div>
                <div>{portfolio.description}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MarkdownPortfoliosList;
