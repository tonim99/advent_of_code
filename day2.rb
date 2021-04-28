def is_valid (input)
    total_count = input[:password].split('').reduce(0) do |count, char|
      count + (char == input[:required_char] ? 1 : 0)
    end
    total_count >= input[:min] and total_count <= input[:max]
end

valid_count = 0

File.foreach('day2.input.txt') do |line| 
  input_hash = {} # min, max, required_char, password
  split_line = line.split(' ')
  input_hash[:password] = split_line[2]
  input_hash[:required_char] = split_line[1].delete(':')
  input_hash[:min] = split_line[0].split('-')[0].to_i
  input_hash[:max] = split_line[0].split('-')[1].to_i
  valid_count = is_valid(input_hash) ? valid_count + 1 : valid_count
end

puts valid_count
