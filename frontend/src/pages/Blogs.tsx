import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className=" max-w-xl">
          <BlogCard
            authorName={"Harsh Karan"}
            title={
              "how an ugly website makes 5000$ a month without affliate marketing"
            }
            content={
              "how an ugly website makes 5000$ a month without affliate marketing"
            }
            publishedDate={"2nd Feb 2024"}
          />
          <BlogCard
            authorName={"Harsh Karan"}
            title={
              "how an ugly website makes 5000$ a month without affliate marketing"
            }
            content={
              "how an ugly website makes 5000$ a month without affliate marketing"
            }
            publishedDate={"2nd Feb 2024"}
          />
          <BlogCard
            authorName={"Harsh Karan"}
            title={
              "how an ugly website makes 5000$ a month without affliate marketing"
            }
            content={
              "how an ugly website makes 5000$ a month without affliate marketing"
            }
            publishedDate={"2nd Feb 2024"}
          />
          <BlogCard
            authorName={"Harsh Karan"}
            title={
              "how an ugly website makes 5000$ a month without affliate marketing"
            }
            content={
              "how an ugly website makes 5000$ a month without affliate marketing"
            }
            publishedDate={"2nd Feb 2024"}
          />
        </div>
      </div>
    </div>
  );
};
