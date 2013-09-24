CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',                                       # required
    :aws_access_key_id      => 'AKIAI33NY5DXCTZTESMA',                      # required
    :aws_secret_access_key  => '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',  # required
    :region                 => 'us-east-1'                                  # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = 'strengthify-pro'                       # required
  config.fog_public     = false                                   # optional, defaults to true
  config.fog_attributes = {'Cache-Control'=>'max-age=315576000'}  # optional, defaults to {}
  config.storage = :fog
end