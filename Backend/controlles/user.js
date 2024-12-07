import User from '../models/model/userM.js';
import Transaction from '../models/model/transaction.js';

// Define relationships
User.hasMany(Transaction, {
  foreignKey: 'userId',
  as: 'transactions'
});

Transaction.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

export { User, Transaction };