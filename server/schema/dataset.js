const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataset', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    n_cell: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    n_cluster: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    n_original_cell: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    age: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ari_score: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    condition: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    data_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    iris3_jobid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mice_model: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    public_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    silhouette_score: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    species: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stage: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dataset',
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
