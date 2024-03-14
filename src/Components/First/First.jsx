import PropTypes from "prop-types";

const First = ({ data1, handle, read }) => {
  // let {id,cover,title,author_img,author,reading_time} = data1
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = data1;

  return (
    <div className="p-4 rounded-2xl bg-gray-200 mt-[20px] w-[75%] min-h-[400px] ">
      <img className="rounded-2xl " src={cover} alt="" />

      <div className=" space-y-3">
        <div className="flex justify-between mt-5">
          <h1 className="text-[30px] font-[700]">{author}</h1>
          <img className="w-[45px] rounded-xl" src={author_img} alt="" />
        </div>

        <h1 className="text-[25px] font-[500]">{title}</h1>
        <div className="flex justify-between">
          <h1>Post Date : {posted_date}</h1>
          <button onClick={read} className="text-blue-600">
            Reading Time {reading_time}
          </button>
        </div>

        <div className="flex justify-between">
          <div className="flex space-x-2 cursor-pointer">
            <h1>#{hashtags[0]}</h1>
            <h1>#{hashtags[1]}</h1>
          </div>
          <button
            onClick={()=> handle(data1)}
            className="text-[20px] font-[700] text-green-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

First.propTypes = {
  data1: PropTypes.array,
  id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  author_img: PropTypes.string,
  author: PropTypes.string,
  reading_time: PropTypes.number,
};

export default First;
