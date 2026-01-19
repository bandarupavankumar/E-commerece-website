"use client";

import { Product } from "@/type";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
    product: Product;
}

const ProductGallery = ({ product }: Props) => {
    const [currentImage, setCurrentImage] = useState(product?.image);

    return (
        <div className="flex flex-col gap-5">
            <div className="w-full h-[500px] relative bg-gray-100 rounded-xl overflow-hidden group">
                <Image
                    src={currentImage}
                    alt="productImage"
                    fill
                    className="object-contain group-hover:scale-110 duration-500"
                />
            </div>
            {product?.images && product?.images?.length > 0 && (
                <div className="flex items-center gap-5 overflow-auto">
                    {product?.images?.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentImage(img)}
                            className={cn(
                                "w-24 h-24 relative rounded-md border border-babyshopTextLight/20 cursor-pointer overflow-hidden opacity-70 hover:opacity-100 duration-300",
                                currentImage === img && "border-babyshopBlack opacity-100"
                            )}
                        >
                            <Image
                                src={img}
                                alt={`image-${index}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                    {/* Also include the main image as a thumbnail option if not already in images specific array logic depends on backend implementation, usually good to have all available images accessible */}
                    <div
                        onClick={() => setCurrentImage(product?.image)}
                        className={cn(
                            "w-24 h-24 relative rounded-md border border-babyshopTextLight/20 cursor-pointer overflow-hidden opacity-70 hover:opacity-100 duration-300",
                            currentImage === product?.image && "border-babyshopBlack opacity-100"
                        )}
                    >
                        <Image
                            src={product?.image}
                            alt="main-image-thumbnail"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductGallery;
