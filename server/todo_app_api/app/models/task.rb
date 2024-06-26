require 'json'

class Task
  attr_accessor :id, :title

  def initialize(attributes = {})
    @id = attributes[:id]
    @title = attributes[:title]
  end

  def save
    self.id ||= SecureRandom.uuid
    data = { id: id, title: title }
    File.write("data/tasks/#{id}.json", data.to_json)
  end

  def self.find(id)
    file_path = "data/tasks/#{id}.json"
    return nil unless File.exist?(file_path)

    data = JSON.parse(File.read(file_path))
    new(id: data['id'], title: data['title'])
  end

  def self.destroy(id)
    file_path = "data/tasks/#{id}.json"
    File.delete(file_path) if File.exist?(file_path)
  end

  def self.all
    Dir.glob("data/tasks/*.json").map do |file_name|
      id = File.basename(file_name, ".json")
      self.find(id)
    end
  end
end
