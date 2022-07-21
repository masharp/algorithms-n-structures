
=begin
 * Queue Data Structure written in Ruby
=end

class Node
  attr_accessor :data, :next

  def initialize(data)
    @data = data
    @next = nil
  end
end

class Queue
  attr_accessor :front, :length

  def initialize()
    @front = nil
    @length = 0
  end

  def enqueue(data)
    node = Node.new(data)
    current = @front

    if @length < 1
      @front = node
    else
      while current.next != nil
        current = current.next
      end

      current.next = node
    end
    @length += 1

    return node.data
  end

  def dequeue()
    front = @front
    @front = front.next

    @length -= 1

    return front.data
  end

  def peek()
    return @front.data
  end
end

q = Queue.new()
