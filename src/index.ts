import 'dotenv/config';

/**
 * Main function to start the application.
 */
async function bootstrap() {
  const port = process.env.PORT || 3000;

  // eslint-disable-next-line no-console
  console.log(`Server is starting on port ${port}...`);

  // Your professional backend logic starts here
  console.log('Hello, Earth Orbiting Objects backend!');
}

bootstrap().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Failed to start the application:', error);
  process.exit(1);
});
