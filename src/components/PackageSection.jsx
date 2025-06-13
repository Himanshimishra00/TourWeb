import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTopPackages } from '../services/api';
import { FaRupeeSign } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../index.css';

const PackageSection = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['topPackages'],
        queryFn: fetchTopPackages,
        staleTime: 1000 * 60 * 5
    });

    if (isLoading) return <div className="loader">Loading packages...</div>;
    if (isError) return <div className="error">Failed to load packages.</div>;

    return (
        <section className="section">
            <h2 className="section-title">✨ Top Selling Tour Packages of India</h2>
            <div className="grid">
                {data.map((pkg, index) => (
                    <motion.div
                        key={index}
                        className="card"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <img src={pkg.image} alt={pkg.title} className="card-img" />
                        <div className="card-body">
                            <h3>{pkg.title}</h3>
                            <p>{pkg.location}</p>
                            <p className="price">
                                <FaRupeeSign /> {pkg.price}
                            </p>
                            <button className="btn">View Details</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PackageSection;
