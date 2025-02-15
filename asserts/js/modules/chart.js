// 圖表模組（需搭配 Chart.js 使用）

export const initializeChart = () => {
    const chartCanvas = document.getElementById('categoryChart');
    if (!chartCanvas) return;
    const ctx = chartCanvas.getContext('2d');
    const data = {
        labels: ['綠色出行', '深度學習', '工具與腳本', '網頁應用', '其他專案'],
        datasets: [{
            data: [1, 2, 4, 3, 2],
            backgroundColor: [
                '#10B981',
                '#6366F1',
                '#F59E0B',
                '#EC4899',
                '#8B5CF6'
            ]
        }]
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
};
