const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iris3_regulon', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rss: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    rss_pval: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    gene_symbol: {
      type: DataTypes.STRING(10000),
      allowNull: true
    },
    data_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    index: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tf_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gene_id: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'iris3_regulon',
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
