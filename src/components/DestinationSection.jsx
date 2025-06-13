import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDestinations } from '../services/api';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../index.css';

const DestinationSection = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['destinations'],
        queryFn: fetchDestinations,
        staleTime: 1000 * 60 * 5
    });

    if (isLoading) {
        return (
            <div className="loader">Loading destinations...</div>
        );
    }

    if (isError) return <div className="error">Failed to load destinations.</div>;

    return (
        <section className="section">
            <h2 className="section-title">🌍 Explore Most Popular Destinations</h2>
            <div className="grid">
                {data.map((dest, index) => (
                    <motion.div
                        key={index}
                        className="card"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <img src={dest.image} alt={dest.name} className="card-img" />
                        <div className="card-body">
                            <h3>{dest.name}</h3>
                            <p>{dest.description}</p>
                            <span className="location">
                                <FaMapMarkerAlt /> {dest.location}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default DestinationSection;
