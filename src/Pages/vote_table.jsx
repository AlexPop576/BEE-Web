import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../vote_table.css';
import PP from '../assets/Partidul Poporului.png';  // Image for Partidul Poporului
import AE from '../assets/Aurora Economica.png';   // Image for Aurora Economica
import PPR from '../assets/Partidul Progresului.png'; // Image for Partidul Progresului
import PA from '../assets/Partidul Adevarului.png';  // Image for Partidul Adevarului
import CA from '../assets/Coalitia Unire.png';     // Image for Coalitia Unire
import AV from '../assets/Asociatia Vorbelor.png';  // Image for Asociatia Vorbelor

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export function VoteTable() {
  const [voteData, setVoteData] = useState([]);

  useEffect(() => {
    // Function to fetch vote data from the server
    const fetchVoteData = () => {
      axios.get('http://localhost:5000/get-votes')
        .then(response => {
          // Add the client-side image paths for each candidate
          const updatedData = response.data.map(item => {
            let image;
            switch (item.Candidat) {
              case "Agamemnon Dandanache":
                image = PP;
                break;
              case "Nae Cațavencu":
                image = AE;
                break;
              case "Tase Fandoseanu":
                image = PPR;
                break;
              case "Ionel Buimăceanu":
                image = PA;
                break;
              case "Ștefan Pleșuvanu":
                image = CA;
                break;
              case "Fane Cotcodac":
                image = AV;
                break;
              default:
                image = '';  // Default fallback if no image is found
            }
            return { ...item, Image: image };
          });
          setVoteData(updatedData); // Update state with the new data
        })
        .catch(error => {
          console.error('Error fetching vote data:', error);
        });
    };

    // Fetch data immediately when component mounts
    fetchVoteData();
  }, []);

  const columns = ['Imagine', 'Candidat', 'Partid', 'Voturi']; // Updated columns with 'Imagine'

  // Data for the bar chart
  const barChartData = {
    labels: voteData.map(item => item.Candidat),
    datasets: [
      {
        label: 'Voturi',
        data: voteData.map(item => item.Voturi),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Green color for the bars
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for the pie chart
  const pieChartData = {
    labels: voteData.map(item => item.Candidat), // Use the candidate names for the labels
    datasets: [
      {
        label: 'Voturi',
        data: voteData.map(item => item.Voturi),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',  // Color for Partidul Poporului
          'rgba(54, 162, 235, 0.6)',   // Color for Aurora Economica
          'rgba(255, 206, 86, 0.6)',    // Color for Partidul Progresului
          'rgba(75, 192, 192, 0.6)',    // Color for Partidul Adevarului
          'rgba(153, 102, 255, 0.6)',   // Color for Coalitia Unire
          'rgba(255, 159, 64, 0.6)',    // Color for Asociatia Vorbelor
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const Table = ({ columns, data }) => {
    return (
      <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td style={{ width: '20%', padding: 0 }}>
                <img
                  src={row.Image}
                  alt={row.Partid}
                  style={{
                    width: '60%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                    borderRadius: '10%' // Add rounded corners here
                  }}
                />
              </td>
              {columns.slice(1).map((column, colIndex) => ( // Skip the first column
                <td key={colIndex}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Voturi: ${tooltipItem.raw}`; // Customize tooltip if needed
          },
        },
      },
    },
  };

  return (
    <div className="vote-background">
      <p id="statistici-vot">Statistici vot</p>
      <div className="flex-container">
        <div id="table-color">
          <Table columns={columns} data={voteData} />
        </div>
        <div className="charts-container">
          <div className="chart">
            <h2>Diagramă în sectoare</h2>
            <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
          </div>
          <div className="chart">
            <h2>Diagramă bară</h2>
            <Bar data={barChartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
