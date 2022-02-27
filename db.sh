#!/bin/bash
cat dbinit.sql | cockroach sql --url "$1"