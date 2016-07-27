testA = [3, 2, 1, 3] #candles with height


## find the tallest candle and then count how many are put out in one 'blow'
def blowCandles(candles)
  max = candles.max
  num = candles.count(max)

  return num
end


puts blowCandles(testA)
