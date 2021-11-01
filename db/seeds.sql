INSERT INTO department (departmentName)
VALUES 
    ("CyberSecurity"),
    ("WebDeveloper"),
    ("GameDeveloper"),
    ("GraphicDesign");

INSERT INTO role (title, salary, department_id)
VALUES
    ("High Developer", 90000, 3),
    ("Mid Developer", 55000, 2),
    ("Low Developer", 38000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Dekstar", "Donuts", 3, 1),
    ("Kate", "Kenner", 2, 2),
    ("Beyo", "Paz", 1, 4)
    ("John", "Maples", 1, 1),
    ("Carrie", "Understood", 2, 3),
    ("Justin", "Bakes", 3, 1);
  