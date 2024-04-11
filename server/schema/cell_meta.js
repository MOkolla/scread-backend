const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cell_meta', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cell_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    subcluster: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    umap_1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    umap_2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pca_1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pca_2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pca_3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cell_type: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    data_id: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cell_meta',
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
