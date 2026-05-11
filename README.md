# opendata-japan

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This project provides an interactive dashboard to visualize the status of open data initiatives among local governments in Japan. It uses data from the "FY2024 Survey on Open Data Initiatives in Local Governments" and displays it on an interactive tabular map.

## Live Demo

- **[オープンデータ取組状況ダッシュボード (Open Data Initiative Status Dashboard)](https://code4fukui.github.io/opendata-japan/)**

## Features

-   **Interactive Tabular Maps**: The dashboard displays a grid-based map of Japan. You can drill down from a national view to individual prefectures.
-   **Color-Coded Status**: Each municipality is color-coded based on its survey response:
    -   **Red**: Survey not submitted or unconfirmed.
    -   **Pink**: Submitted, but not currently engaged in open data.
    -   **White**: Submitted and actively engaged in open data.
-   **Prefecture-Level Aggregates**: The national view shows a heatmap based on the survey submission rate for each prefecture, along with statistics for both submission and engagement rates.
-   **Detailed Data View**: Clicking on a specific municipality displays a table with its complete answers to the survey.

## Data Source

The visualization is based on the following data:

-   **Primary Data**: [令和6年度地方公共団体におけるオープンデータの取組に関するアンケート (FY2024 Survey on Open Data Initiatives in Local Governments)](20250210_resources_data_questionnaire_outline_04.csv) from the Japan Digital Agency.
    -   [Official Metadata and Description (in Japanese)](20250210_resources_data_questionnaire_outline_05.md)
-   **Supplementary Data**: [code4fukui/localgovjp](https://github.com/code4fukui/localgovjp) for a comprehensive list of local governments in Japan.

## How It Works

The dashboard is a static web application built with vanilla HTML, CSS, and JavaScript (ES Modules).

-   `index.html` fetches the survey and local government data (CSV files) directly in the browser.
-   The visualization is rendered using a custom tabular map engine (`makeGrids.js`) that arranges geographical areas into a responsive grid.
-   All calculations for submission rates, engagement rates, and color-coding are performed client-side.
-   A Deno script (`makeMeta.js`) is included to pre-process the survey CSV and generate a metadata file (`.meta.csv`) describing the columns and their unique values.

## Local Development

To run the dashboard locally:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/code4fukui/opendata-japan.git
    cd opendata-japan
    ```

2.  **Start a local web server:**
    Since this is a static site, you can use any simple HTTP server.

    Using Node.js:
    ```sh
    npx http-server
    ```
    Or using Python 3:
    ```sh