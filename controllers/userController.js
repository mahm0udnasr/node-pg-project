import pool from "../config/db.js";

export const getUsers = async (req, res) => {
  try {
    const { rows, rowCount } = await pool.query(
      "SELECT * FROM users ORDER BY id"
    );
    res.status(200).json({ success: true, users: rows, usersCount: rowCount });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "fill data first" });
    }
    await pool.query("INSERT INTO users (email, password) VALUES ($1, $2)", [
      email,
      password,
    ]);
    return res
      .status(201)
      .json({ success: true, message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password } = req.body;
    if (!id) {
      return res
        .status(404)
        .json({ success: false, message: "but you id first!" });
    }
    if (!email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "fill data first" });
    }
    await pool.query(
      "UPDATE users SET email = $1, password = $2 WHERE id = $3",
      [email, password, id]
    );
    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(404)
        .json({ success: false, message: "but you id first!" });
    }
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};
