=begin
  - Ruby Solution to the HackerRank Algorithm Problem Modified Kaprekar Numbers
  - https://www.hackerrank.com/challenges/kaprekar-numbers
=end

p1 = 1
q1 = 100
p2 = 2
q2 = 200

def checkKaprekar(n)
  s = (n * n).to_s ## get the square of the current number
  length = s.length ## get the number of digits in the square
  d = length / 2

  ## get the left hand side and righ hand side, based on problem statement
  l = s.slice(0, d).to_i
  r = s.slice(d, length).to_i

  return (l + r) === n ## check if number is a modified kaprekar
end

def getModifiedKaprekars(p, q)
  results = []

  for x in p..q do
    if checkKaprekar(x)
      results.push(x)
    end
  end

  if results.length > 0
    print results.join(" ")
  else
    print "INVALID RANGE"
  end
end

getModifiedKaprekars(p1, q1)
