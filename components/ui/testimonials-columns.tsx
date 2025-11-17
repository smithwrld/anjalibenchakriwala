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
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-6 rounded-2xl bg-white/20 backdrop-blur-lg border border-black/10 shadow-md max-w-xs w-full hover:shadow-lg transition-shadow duration-300" 
                  key={i}
                >
                  <div className="text-brand-text-light text-sm leading-relaxed mb-4 italic">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full border-2 border-brand-primary/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-brand-text text-sm leading-tight">{name}</div>
                      <div className="text-xs text-brand-primary leading-tight">{role}</div>
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

// Testimonials data adapted for your chakri business
const testimonials = [
  {
    text: "Absolutely the best chakri I've had outside of my grandmother's kitchen! The texture and taste are perfect.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Priya Sharma",
    role: "Food Enthusiast",
  },
  {
    text: "The spicy masala chakri is addictive. Perfect snack for any time of the day. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Rohan Mehta",
    role: "Regular Customer",
  },
  {
    text: "Amazing quality and authentic taste. These chakris remind me of my childhood. Will definitely order again!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Kavya Patel",
    role: "Happy Customer",
  },
  {
    text: "Fresh, crispy, and full of flavor. The traditional recipe really shows in every bite. Excellent service too!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Arjun Singh",
    role: "Food Blogger",
  },
  {
    text: "I ordered for a family gathering and everyone loved them. The methi chakri is particularly outstanding!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Meera Gupta",
    role: "Family Customer",
  },
  {
    text: "Authentic taste, perfect packaging, and quick delivery. This is exactly what traditional snacks should be!",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Anita Joshi",
    role: "Loyal Customer",
  },
  {
    text: "The quality is consistent and the flavors are amazing. These chakris are now a staple in our home!",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Vikram Rao",
    role: "Regular Buyer",
  },
  {
    text: "Handcrafted with love - you can really taste the difference. Best traditional snacks I've found online!",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sunita Devi",
    role: "Traditional Food Lover",
  },
  {
    text: "Perfect for tea time and gatherings. The spiral shape and crispy texture are just like homemade!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Rajesh Kumar",
    role: "Tea Time Regular",
  },
];

export { testimonials };
