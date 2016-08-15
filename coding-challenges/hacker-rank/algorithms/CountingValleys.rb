testA = "UDDDUDUU" #1
testB = "DDUUDDUDUUUD" #2

def countValleys(steps)
  steps = steps.split("")
  elevation = 0
  lastStep = 0
  valleys = 0

  steps.each_with_index do |x, i|
    ## Track the current elevation from sea level (0)
    if x == "U"
      elevation += 1
    elsif x == "D"
      elevation -= 1
    end

    ## ignore the first step where it will be zero, ensure last step was a valley, and that
    ## the slope of the valley reaches sea level
    if i != 0 && lastStep < 0 && elevation === 0
      valleys += 1
    end

    ## track the previous step's elevation
    lastStep = elevation
  end

  return valleys
end

puts countValleys(testA)
