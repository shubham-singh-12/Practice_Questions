# 9. Write a Python program to display the examination schedule. (extract the date from exam_st_date).
# exam_st_date = (11, 12, 2014)
# Sample Output : The examination will start from : 11 / 12 / 2014


# Given Exam Scheduled Date
given_exam_st_date = (11, 12, 2024)

# Convert tuple into string & Replace the exam date from (,) to (/)
extracted_exam_date = str((given_exam_st_date)).replace(",", "/")

# Print Exam Scheduled date properly
print(f"The examination will start from: {extracted_exam_date}")