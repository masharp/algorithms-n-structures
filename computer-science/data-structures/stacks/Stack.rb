class Node
  attr_accessor :data, :previous

  def initialize(data)
    @data = data
    @previous = nil
  end
end

class Stack
  attr_accessor :length, :top

  def initalize()
    @top = nil
    @length = 0
  end

  def push(data)
    node = Node.new(data)
    node.previous = @top
    @top = node
    @length =+ 1

    return @top
  end

  def pop()
    current = @top

    @top = @top.previous
    @length =- 1
    return current.data
  end
end

s = Stack.new()
s.push(2)
s.push(12)

print s.pop()
