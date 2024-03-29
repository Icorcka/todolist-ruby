require 'json'

class User
  attr_accessor :id, :name, :password_digest

  def initialize(attributes = {})
    @id = attributes[:id]
    @name = attributes[:name]
    @password_digest = attributes[:password_digest]
  end

  def save
    create_directory_unless_exists
    data = { id: id, name: name, password_digest: password_digest }
    File.write(file_path, data.to_json)
  end

  def self.find(id)
    file_path = "data/users/#{id}.json"
    return nil unless File.exist?(file_path)

    data = JSON.parse(File.read(file_path))
    new(id: data['id'], name: data['name'], password_digest: data['password_digest'])
  end

  def self.destroy(id)
    file_path = "data/users/#{id}.json"
    File.delete(file_path) if File.exist?(file_path)
  end

  def self.all
    Dir.glob("data/users/*.json").map do |file_name|
      id = File.basename(file_name, ".json")
      self.find(id)
    end
  end

  def authenticate(password)
    password_digest == password
  end

  private

  def create_directory_unless_exists
    Dir.mkdir('data') unless Dir.exist?('data')
    Dir.mkdir('data/users') unless Dir.exist?('data/users')
  end

  def file_path
    "data/users/#{id}.json"
  end
end
