import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Tasks({ token }) {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editingTaskId, setEditingTaskId] = useState(null);

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
    if (editingTaskId) {
      const res = await axios.put(
        `http://localhost:5000/api/tasks/${editingTaskId}`,
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks(tasks.map((t) => (t._id === editingTaskId ? res.data : t)));
      setEditingTaskId(null);
    } else {
      const res = await axios.post("http://localhost:5000/api/tasks", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks([...tasks, res.data]);
    }
    setForm({ title: "", description: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const handleEdit = (task) => {
    setForm({ title: task.title, description: task.description });
    setEditingTaskId(task._id);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setForm({ title: "", description: "" });
  };

  const inputStyle = {
    padding: "0.6rem 1rem",
    margin: "0.4rem",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
    outline: "none",
    fontSize: "1rem",
    backdropFilter: "blur(10px)",
    width: "160px",
  };

  const buttonStyle = {
    margin: "0.4rem",
    padding: "0.6rem 1.2rem",
    borderRadius: "10px",
    border: "none",
    background: "#a4508b",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    background: "#999",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    width: "100%",
    marginTop: "2rem",
  };

  const taskItemStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "1rem",
    borderRadius: "10px",
    marginBottom: "1rem",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(255,255,255,0.1)",
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <form onSubmit={handleCreate} style={{ marginBottom: "2rem", textAlign: "center" }}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          {editingTaskId ? "Update Task" : "Add Task"}
        </button>
        {editingTaskId && (
          <button
            type="button"
            onClick={handleCancelEdit}
            style={cancelButtonStyle}
          >
            Cancel
          </button>
        )}
      </form>

      <ul style={listStyle}>
        {tasks.map((task) => (
          <li key={task._id} style={taskItemStyle}>
            <div>
              <strong>{task.title}</strong> — {task.description}
            </div>
            <div>
              <button
                onClick={() => handleEdit(task)}
                style={{ ...buttonStyle, background: "#5f0a87" }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                style={{ ...buttonStyle, background: "#ff4f4f", marginLeft: "0.5rem" }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
