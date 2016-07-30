=begin
* A straightfoward implementation of a classic Singly Linked List data
* structure in Ruby.
*
* www.softwareontheshore.com
=end

class Node
  attr_accessor :data, :next

  def initialize(data)
    @data = data
    @next = nil
  end
end

class LinkedList
  attr_accessor :length, :head

  def initialize()
    @head = nil
    @length = 0
  end

  def add(value)
    current = @head
    new_node = Node.new(value)

    if current === nil
      @head = new_node

      return new_node
    end

    while current.next != nil
      current = current.next
    end

    current.next = new_node
    @length += 1

    return new_node
  end

  def position(value)
    current = @head
    count = 0

    while current.next != nil
      if current.data === value
        return count
      end

      current = current.next
      count += 1
    end

    if current.data = value
      return count
    end

    return -1
  end

  def find(position)
    current = @head
    length = @length
    count = 0

    if position >= length || position < 0
      return -1
    end

    while count < position
      corrent = current.next
      count += 1
    end

    return current
  end

  def remove(position)
    current = @head
    length = @length
    deleted_node = nil
    previous_node = nil
    count = 0

    if position < 0 || position > length
      return -1
    end

    if position === 0
      @head = current.next
      deleted_node = current
      @length -= 1

      return deleted_node
    end

    while count < position
      previous_node = current
      current = current.next
      count += 1
    end

    if previous_node != nil
      previous_node.next = current.next
    end

    deleted_node = current
    current = nil
    @length -= 1

    return deleted_node
  end
end
