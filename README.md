# TypeScript-Reusable-Code

Working with CSV files

First simple implementation

# Load

I use the Filesystem module for this part

# Parse

split on new line
map to array and split on comma

# Analyze

do some simple data massage and get number of wins for a particular team

# Report

print the wins

# Issues with first implementation

# Magic string comparisons 'H', 'A', 'D'

- Solution: Enums

# Source of data is hardcoded

- Breaking out CSV file reader into separate class for more reusable code

# Data array is all strings even though they contain numbers

- Solution: Describe the row with a tuple

# Variable is named after a specific team

-

# Analysis type is fixed

-

# No ability to output the report in different formats

-
# Inheritance vs Composition

- Inheritance = Is a relationship between to classes. For example MatchReader is a CsvFileReader because MatchReader has all the different methods and properties that normally belong to a CsvFileReader as well.
  
We created a Superclass and child class that extended the parent class and customized the behaviour by implementing the abstract method from the parent (mapRow) inside of the child.


- Composition = Has a relationship between two classes. For example in this case MatchReader has a reference to an outside object like our CsvFileReader and everytime we wanted to upload some data we delegated that to that outside object
  
We created different classes, with reference to an object. We said that this object could be any object that satisfied the dataReader interface.
The loading of the data was handled by another different class. The reader can then be switched out for another to customize the behaviour.

