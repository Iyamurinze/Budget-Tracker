import Income from "../models/model/incomeM.js";

// Function to add a new income record
export const addIncome = async (incomeData) => {
    try {
        const income = await Income.create(incomeData);
        return income;
    } catch (error) {
        console.error("Error adding income:", error);
        throw error;
    }
};

// Function to get all income records
export const getIncomes = async (req, res) => {
    try {
        console.log("Decoded token user:", req.user); // Debugging

        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "Unauthorized access" });
        }

        const incomes = await Income.findAll({ where: { userId: req.user.id } });

        res.status(200).json(incomes);
    } catch (error) {
        console.error("Error retrieving incomes:", error);
        res.status(500).json({ message: "Error fetching incomes" });
    }
};

// Function to get a specific income record by ID
export const getIncomeById = async (id) => {
    try {
        const income = await Income.findByPk(id);
        return income;
    } catch (error) {
        console.error("Error retrieving income by ID:", error);
        throw error;
    }
};

// Function to update an income record
export const updateIncome = async (id, incomeData) => {
    try {
        await Income.update(incomeData, { where: { id } });
        const updatedIncome = await Income.findByPk(id);
        return updatedIncome;
    } catch (error) {
        console.error("Error updating income:", error);
        throw error;
    }
};

// Function to delete an income record by ID
export const deleteIncome = async (id) => {
    try {
        await Income.destroy({ where: { id } });
        return { message: "Income deleted successfully" };
    } catch (error) {
        console.error("Error deleting income:", error);
        throw error;
    }
};
