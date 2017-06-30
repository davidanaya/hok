module.exports = (sequelize, DataTypes) => {
  const punchcard_campaigns_webapp = sequelize.define(
    'punchcard_campaigns_webapp',
    {
      campaignid: {
        type: DataTypes.BIGINT,
        primaryKey: true
      },
      campaigncode: DataTypes.STRING(500),
      campaignname: DataTypes.STRING(500),
      client: DataTypes.STRING(500),
      clientcode: DataTypes.STRING(500),
      clientlead: DataTypes.STRING(500),
      hokaccountlead: DataTypes.STRING(500),
      hokmedia: DataTypes.STRING(500),
      primaryconversiongoal: DataTypes.STRING(500),
      secondaryconversiongoal: DataTypes.STRING(500),
      clickcookiewindow: DataTypes.STRING(500),
      impressioncookiewindow: DataTypes.STRING(500),
      totalactualbudget: DataTypes.DOUBLE,
      plannedinvestment: DataTypes.DOUBLE,
      contingency: DataTypes.DOUBLE,
      startdate: DataTypes.DATEONLY,
      enddate: DataTypes.DATEONLY,
      county: DataTypes.STRING(500),
      office: DataTypes.STRING(500),
      currency: DataTypes.STRING(500),
      bau_specialproject: DataTypes.STRING(500),
      lastupdate: DataTypes.DATEONLY
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  return punchcard_campaigns_webapp;
};
