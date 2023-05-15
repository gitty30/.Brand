import React from "react";

const About = () => {
  return (
    <div className="w-full my-32 text-center">
      <div className="max-w-[1240px] mx-auto">
        <div className="py-7 ">
          <h1 className="text-5xl font-bold ">
            Trusted by developers across the world
          </h1>
          <p className="text-3xl py-6 text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            dignissimos aliquam atque accusamus facilis incidunt fugit suscipit!
          </p>
        </div>
        <div className=" grid md:grid-cols-3 gap-3">
          <div>
            <p>100%</p>
            <p>Completeion</p>
          </div>
          <div>
            <p>24/7</p>
            <p>Delivery</p>
          </div>
          <div>
            <p>100K</p>
            <p>Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
