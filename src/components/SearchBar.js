import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Form = styled(motion.form)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border: none;
  cursor: pointer;
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery("");
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </motion.form>
  );
};

export default SearchBar;
