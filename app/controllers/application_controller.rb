class ApplicationController < ActionController::Base
  layout ->() { browser.device.mobile? ? 'mobile' : 'application' }
  before_action ->() { request.variant = :mobile if browser.device.mobile? }
end
