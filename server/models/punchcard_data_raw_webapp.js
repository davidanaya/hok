module.exports = (sequelize, DataTypes) => {
  const punchcard_data_raw_webapp = sequelize.define(
    'punchcard_data_raw_webapp',
    {
      rowid: {
        type: DataTypes.BIGINT,
        primaryKey: true
      },
      executionid: DataTypes.BIGINT,
      sde_date: DataTypes.DATEONLY,
      filename: DataTypes.STRING(500),
      publisher: DataTypes.STRING(500),
      product_a: DataTypes.STRING(500),
      targeting: DataTypes.STRING(500),
      targeting_b: DataTypes.STRING(500),
      geo_target: DataTypes.STRING(500),
      pickup: DataTypes.STRING(500),
      product_b: DataTypes.STRING(500),
      product_c: DataTypes.STRING(500),
      funding: DataTypes.STRING(500),
      channel: DataTypes.STRING(500),
      device: DataTypes.STRING(500),
      publisher_start: DataTypes.DATEONLY,
      publisher_end: DataTypes.DATEONLY,
      total_days: DataTypes.DOUBLE,
      rate_type: DataTypes.STRING(500),
      trading_model: DataTypes.STRING(500),
      net_rate: DataTypes.DOUBLE,
      bau_net_media_purchased: DataTypes.DOUBLE,
      ml_net_media_purchased: DataTypes.DOUBLE,
      net_media_delivered: DataTypes.DOUBLE,
      io_status: DataTypes.DOUBLE,
      io_region: DataTypes.STRING(500),
      ad_unit: DataTypes.STRING(500),
      ad_unit_sizes: DataTypes.STRING(500),
      gross_margin: DataTypes.DOUBLE,
      barcode: DataTypes.STRING(500),
      ad_serving_rate: DataTypes.DOUBLE,
      third_party_ad_serving_rate: DataTypes.DOUBLE,
      third_party_ad_serving_rate_b: DataTypes.DOUBLE,
      creative_fees: DataTypes.DOUBLE,
      ad_serving_fees: DataTypes.DOUBLE,
      third_party_ad_serving_fees: DataTypes.DOUBLE,
      third_party_ad_serving_fees_b: DataTypes.DOUBLE,
      total_ad_serving_fees: DataTypes.DOUBLE,
      management_fees: DataTypes.DOUBLE,
      trafficking_fees: DataTypes.DOUBLE,
      total_investment: DataTypes.DOUBLE,
      ctr: DataTypes.DOUBLE,
      itc: DataTypes.DOUBLE,
      breakage: DataTypes.DOUBLE,
      abv: DataTypes.DOUBLE,
      cos_input: DataTypes.DOUBLE,
      margin: DataTypes.DOUBLE,
      impressions: DataTypes.DOUBLE,
      clicks: DataTypes.DOUBLE,
      conversions: DataTypes.DOUBLE,
      conversions_pi: DataTypes.DOUBLE,
      cost_per_conversion: DataTypes.DOUBLE,
      daily_spend: DataTypes.DOUBLE,
      revenue: DataTypes.DOUBLE,
      cos_calculated: DataTypes.DOUBLE,
      roi_media: DataTypes.DOUBLE,
      roi: DataTypes.DOUBLE,
      revenue_b: DataTypes.DOUBLE,
      conversions_b: DataTypes.DOUBLE,
      contributed_bookings: DataTypes.DOUBLE,
      contributed_net_revenue: DataTypes.DOUBLE,
      display_and_contributed_roi: DataTypes.DOUBLE,
      client_name: DataTypes.STRING(500),
      job_no: DataTypes.STRING(500),
      campaign_start_date: DataTypes.DATEONLY,
      campaign_end_date: DataTypes.DATEONLY,
      currency: DataTypes.STRING(500),
      campaign_id: DataTypes.DOUBLE,
      publisher_rollback_flg: DataTypes.STRING(1),
      publisher_active_flg: DataTypes.STRING(2),
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  return punchcard_data_raw_webapp;
};