import PropTypes from "prop-types";

const Second = ({ btn1, btn2 }) => {
  return (
    <div className="bg-gray-100 mt-6  w-[35%] min-h-[400px]  p-[20px]">
      <div className="flex justify-between">
        <h1 className="text-[20px] font-sans font-[700]">Cart : {btn1.length}</h1>
        <h1 className="text-[20px] font-sans font-[700]">
          Total Reading Time : {btn2}
        </h1>
      </div>
      <br />
      <hr />


      {
        btn1.map((e,i)=> (
          <div key={i} className="bg-white w-full h-25 p-4 mt-4 rounded-xl">
        <h1 className="text-[18px] font-serif font-[600]">
          {e.title}
        </h1>
      </div>
        ))
      }

      
    </div>
  );
};

Second.propTypes = {};

export default Second;
