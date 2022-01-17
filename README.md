# net-run-rate-calculator-1
Calculates the net run rate for a given team using lambda step functions.
awslocal lambda create-function --function-name CreateMatchesFunction --runtime nodejs12.x --handler createMatchesHandler.handler --role arn:aws:iam::012345678901:role/DummyRole --zip-file fileb://createMatches.zip


awslocal lambda create-function --function-name CalculateRunRateFunction --runtime nodejs12.x --handler calculateRunRateHandler.handler --role arn:aws:iam::012345678901:role/DummyRole --zip-file fileb://calculateRunRate.zip


awslocal stepfunctions --endpoint http://localhost:8083 create-state-machine --definition file://state-machine.json --name "NetRunRateCalculatorStateMachine" --role-arn "arn:aws:iam::012345678901:role/DummyRole"


awslocal stepfunctions --endpoint http://localhost:8083 start-execution --state-machine arn:aws:states:us-east-1:123456789012:stateMachine:NetRunRateCalculatorStateMachine --name test --input '{\"teamA\":\"India\", \"teamB\": \"Australia\", \"numMatches\": \"3\", \"matchType\": \"t20\"}'


awslocal stepfunctions --endpoint http://localhost:8083 describe-execution --execution-arn arn:aws:states:us-east-1:123456789012:execution:NetRunRateCalculatorStateMachine:test
