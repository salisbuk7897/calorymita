SET sql_safe_updates = FALSE;

USE defaultdb;
DROP DATABASE IF EXISTS calorymita CASCADE;
CREATE DATABASE IF NOT EXISTS calorymita;

USE calorymita;

CREATE TABLE temps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    temp TEXT
);