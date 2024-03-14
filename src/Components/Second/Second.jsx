import PropTypes from "prop-types";

const Second = ({ btn1, btn2 }) => {
  return (
    <div className="bg-[#EEE4B1] mt-6  w-[35%] min-h-[800px]  rounded-xl p-[20px]">
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

Second.propTypes = {
  btn1 : PropTypes.array,
  btn2 : PropTypes.number
};

export default Second;
