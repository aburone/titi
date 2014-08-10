# coding: UTF-8
ENV["TZ"] = "GMT"
require 'sinatra'
require 'sinatra/config_file'
config_file '../config.yml'

# to allow PUT and DELETE from forms
use Rack::MethodOverride

require 'encrypted_cookie'
use Rack::Session::EncryptedCookie, secret: settings.cookie_secret, expire_after: settings.session_length

use Rack::Deflater

require 'pdfkit'
use PDFKit::Middleware

class ExceptionHandling
  def initialize(app)
    @app = app
  end

  def call(env)
    begin
      @app.call env
    rescue Rack::Csrf::InvalidCsrfToken => e
     ap env['rack.errors']
p env['rack.errors'].methods

     env['rack.errors'].reopen.3each { |ee| ap ee }

#      ap e.backtrace.join("\n")
      # env['rack.errors'].flush
      message = "Protección Csrf inválida. Estas logueado? Proba recargar."
      ap message
      ap e.to_s
      [403, {'Content-Type' => 'text/html;charset=utf-8', 'Content-Length' => message.length}, [message]]
    end
  end
end

use ExceptionHandling

require './app_controller'
require './backend'
require './sales'
require './frontend'
map('/') { run Frontend }
map('/admin') { run Backend }
map('/ventas') { run Ventas }
map('/sales') { run Sales }
