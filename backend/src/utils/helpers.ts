export const calculateRequestDuration = (start: number): string => {
    const duration = ((Date.now() - start) / 1000).toFixed(2); // Calculate total request duration in seconds and format it to 2 decimal places
    return `${duration} seconds`;
};
