let express = require("express");
let cors = require("cors");
let app = express();
// const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());

const data = [
  {
    name: "TestSet1",
    description: "test set for load config",
    status: "",
    testCases: [
      {
        name: "abc",
        description: "Sample Test Case 1",
        testCaseStatus: "Not Runned",
        testSteps: [
          {
            commandName: "LoadConfig",
            params: {
              Device: 1001,
            },
            expectedOutcomes: {
              Command: "LoadConfig",
              Device: 1001,
              Status: "ok",
            },
          },
        ],
      },
      {
        name: "def",
        description: "Sample Test Case 2",
        testCaseStatus: "Not Runned",
        testSteps: [
          {
            commandName: "LoadConfig",
            params: {
              Device: 1001,
            },
            expectedOutcomes: {
              Command: "LoadConfig",
              Device: 1001,
              Status: "ok",
            },
          },
        ],
      },
    ],
  },
  {
    name: "TestSet2",
    description: "test set for load config",
    status: "",
    testCases: [
      {
        name: "abc",
        description: "Sample Test Case 1",
        testCaseStatus: "Not Runned",
        testSteps: [
          {
            commandName: "LoadConfig",
            params: {
              Device: 1001,
            },
            expectedOutcomes: {
              Command: "LoadConfig",
              Device: 1001,
              Status: "ok",
            },
          },
        ],
      },
      {
        name: "def",
        description: "Sample Test Case 2",
        testCaseStatus: "Not Runned",
        testSteps: [
          {
            commandName: "LoadConfig",
            params: {
              Device: 1001,
            },
            expectedOutcomes: {
              Command: "LoadConfig",
              Device: 1001,
              Status: "ok",
            },
          },
        ],
      },
    ],
  },
];
app.get("/data", function (req, res) {
  res.json(data);
});

app.post('/postData', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
