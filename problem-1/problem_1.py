def multiples_of_three_or_five(below):
	"""Generator for all the natural numbers that are multiples of 3 or 5."""
	next = 0
	index = 0

	# Calcuate the steps
	# [3, 2, 1, 3, 1, 2, 3]
	steps = [abs(3 - (n % 6)) or 3 for n in range(7)]

	while below > next:
		yield next
		next = next + steps[index]
		index = index + 1 if index < 6 else 0

# Sum of all the multiple of 3 or 5 below 1000
print sum(n for n in multiples_of_three_or_five(1000))
