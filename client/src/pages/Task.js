import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Tasks({ token }) {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:5000/api/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setTasks(res.data));
    }
  }, [token]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/tasks", form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks([...tasks, res.data]);
    setForm({ title: "", description: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div>
      <form
        onSubmit={handleCreate}
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            flex: "1 1 120px",
            fontSize: "1rem",
          }}
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            flex: "2 1 180px",
            fontSize: "1rem",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#6a0572",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
        >
          Add Task
        </button>
      </form>

      <ul style={{ paddingLeft: "20px" }}>
        {tasks.map((task) => (
          <li
            key={task._id}
            style={{
              marginBottom: "10px",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>
              <b>{task.title}</b>: {task.description}
            </span>
            <button
              onClick={() => handleDelete(task._id)}
              style={{
                padding: "5px 12px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#ff4f4f",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
