INSERT INTO departments (departmentName)
VALUES 
    ("CyberSecurity"),
    ("WebDeveloper"),
    ("GameDeveloper"),
    ("GraphicDesign");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("High Developer", 90000, 3),
    ("Mid Developer", 55000, 2),
    ("Low Developer", 38000, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
    ("Dekstar", "Donuts", 3),
    ("Kate", "Kenner", 2),
    ("Beyo", "Paz", 1),
    ("John", "Maples", 1),
    ("Carrie", "Understood", 2),
    ("Justin", "Bakes", 3);
  
