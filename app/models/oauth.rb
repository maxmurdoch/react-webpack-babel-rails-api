class Oauth < ActiveRecord::Base
  validates_presence_of :uid, :handle
end
