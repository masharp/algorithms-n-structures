=begin
 * Hash Table Implemented from scratch via Ruby
=end

class HashTable
  attr_accessor :size, :store

  def initialize(size = 10)
    @size = size
    @store = [] #Array.new(size) { nil }
  end

  def hash(key)
    hash = 0

    key.each_byte do |x|
      hash = (hash << 5) + hash + x
      hash = hash.floor.abs
    end

    return hash % @size
  end

  def insert(key, value)
    index = hash(key)

    if @store[index] === nil
      @store[index] = [[key, value]]
    else
      inserted = False

      @store[index].each do |x|
        if x[0] === key
          x[1] = value
        end
      end

      if inserted === false
        @store[index].push([key, value])
      end
    end
  end

  def retrieve(key)
    index = hash(key)

    if @store[index] === nil
      return nil
    else

      @store[index].each do |x|
        if x[0] === key
          return x[1]
        end
      end
    end
  end
end

=begin
  * HashTable using the Ruby Standard Library
=end

table = { jenny: 'Ugly' }
table[:bobby] = 'Fat'
table[:frank] = 'Smelly'

# table[:bobby] - access a value with this key
# table.clear - remove all key/value pairs
# table.default - set a default value for a key that doesn't exist
# table.delete('frank') - delete key/value pair and return vbalue
# table.each_/key/pair/value - iterate over different data in hash
