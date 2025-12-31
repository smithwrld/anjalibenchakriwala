"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name }, i) => (
                <div
                  className="p-6 rounded-2xl bg-white/20 backdrop-blur-lg border border-black/10 shadow-md max-w-xs w-full hover:shadow-lg transition-shadow duration-300"
                  key={i}
                >
                  <div className="text-brand-text-light text-sm leading-relaxed mb-4 italic">
                    "{text}"
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="font-semibold text-brand-text text-sm leading-tight text-center">
                      — {name}
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

// Testimonials data for Anjali Ben Chakri business
const testimonials = [
  {
    text: "The best chakri I have ever tasted! Crispy, flavorful, and absolutely authentic. Anjali Ben's chakri has become a must-have in our home for every festival and celebration.",
    name: "Vimal Gohel",
  },
  {
    text: "I've tried many brands but nothing compares to the homemade taste of these chakris. The perfect crunch and traditional spices make it irresistible. My family is hooked!",
    name: "Monali Pandhare",
  },
  {
    text: "Outstanding quality and freshness! Every bite reminds me of my grandmother's kitchen. The attention to detail and love in making these chakris really shows.",
    name: "Chandresh Chavda",
  },
  {
    text: "These chakris are simply amazing! The texture is perfect - not too hard, not too soft. The masala flavor is well-balanced and leaves you wanting more. Highly recommended!",
    name: "Parthiv Pithadiya",
  },
  {
    text: "I ordered chakris for my daughter's wedding and received so many compliments from guests. The authentic Gujarati taste transported everyone back to their roots!",
    name: "Dhushyant Gonadliya",
  },
  {
    text: "Pure, traditional, and absolutely delicious! The chakris are so fresh and crispy. Perfect with evening chai. Will definitely be a repeat customer!",
    name: "Charmi Raichura",
  },
  {
    text: "Exceptional taste and quality! These chakris are made with genuine care and the finest ingredients. The spiral shape is perfect and the crispiness lasts for weeks.",
    name: "Smit Modi",
  },
  {
    text: "Being away from Gujarat, I missed the authentic taste of homemade snacks. Anjali Ben's chakri filled that void perfectly. It's like having a piece of home delivered!",
    name: "Ramkrushna Prajapati",
  },
  {
    text: "The most authentic chakri I've found! The recipe is clearly passed down through generations. My whole family loves it and we keep ordering regularly. Thank you Anjali Ben!",
    name: "Mahesh Prajapati",
  },
];

export { testimonials };
