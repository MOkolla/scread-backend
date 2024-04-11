const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publication', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    public_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pmid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    protocol: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    methodology: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    citation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    abstract: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    doi: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'publication',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
